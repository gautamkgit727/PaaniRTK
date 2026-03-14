import React from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { setFilter, resetFilter } from "../usersSlice";
import { useGetUsersQuery } from "../usersApi";
import { getRoleNameById } from "../../../helper/common_helper";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const filter = useSelector((state: RootState) => state.users);

  // console.log("Filter State:", filter); // Debugging line
  const { data, isLoading } = useGetUsersQuery(filter);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ searchText: e.target.value, pageNumber: 1 }));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter({ [e.target.name]: e.target.value, pageNumber: 1 }));
  };

  const handlePageChange = (page: number) => {
    dispatch(setFilter({ pageNumber: page }));
  };

  const handleRowsPerPageChange = (newPerPage: number, page: number) => {
    dispatch(setFilter({ pageSize: newPerPage, pageNumber: page }));
  };


  const columns = [
    { name: "Name", selector: (row: any) => row.username, sortable: true },
    { name: "User ID", selector: (row: any) => row.userid },
    { name: "Role", selector: (row: any) => getRoleNameById(row.roleid, () => store) },
    { name: "Status", selector: (row: any) => (row.active ? "Active" : "Inactive") },
    { name: "Created On", selector: (row: any) => new Date(row.createdon).toLocaleDateString() },
  ];

  return (
    <div>
      <h2>Manage Users</h2>
      <div className="filters mb-3 flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={filter.searchText}
          onChange={handleSearch}
          className="border p-2"
        />
        <select
          name="role"
          value={filter.role}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">All Roles</option>
          {/* Map your roles dynamically */}
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="99">All</option>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
        <button onClick={() => dispatch(resetFilter())} className="bg-gray-200 px-3 py-1">Clear</button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={columns}
          data={data?.result || []}
          pagination
          paginationServer
          paginationTotalRows={data?.recordCount || 0}
          paginationPerPage={filter.pageSize}
          paginationDefaultPage={filter.pageNumber}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          highlightOnHover
        />
      )}
    </div>
  );
};

export default UserList;
