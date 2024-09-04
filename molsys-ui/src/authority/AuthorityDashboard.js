import React, { useState, useEffect } from 'react';
import '../style/Admindash.css'; // Import your CSS file for styling
import * as Icon from 'react-bootstrap-icons';


function AuthorityDashboard() {

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 10;
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [completedProjects, setCompletedProjects] = useState(0);
    const [pendingProjects, setPendingProjects] = useState(0);
    const [editingProject, setEditingProject] = useState(null); // For tracking the project being edited
    const [loading, setLoading] = useState(true);

  // Your project data, replace it with your actual data
    const [projects, setProjects] = useState([
    { id: 1, name: 'New Admin Design', startDate: '02/5/2019', status: 'Completed' },
    { id: 2, name: 'Landing page Design', startDate: '04/6/2019', status: 'Pending' },
    { id: 3, name: 'Multipurpose Landing Template', startDate: '06/6/2019', status: 'Completed' },
    { id: 4, name: 'Multipurpose Landing Template', startDate: '22/10/2019', status: 'Completed' },
    { id: 5, name: 'Multipurpose Landing Template', startDate: '08/2/2020', status: 'Pending' },
    { id: 6, name: 'Multipurpose Landing Template', startDate: '10/5/2020', status: 'Completed' },
    { id: 7, name: 'Multipurpose Landing Template', startDate: '20/9/2020', status: 'Pending' },
    { id: 8, name: 'Multipurpose Landing Template', startDate: '18/1/2021', status: 'Completed' },
    { id: 9, name: 'Multipurpose Landing Template', startDate: '02/2/2021', status: 'Completed' },
    { id: 10, name: 'Multipurpose Landing Template', startDate: '05/4/2021', status: 'Pending' },
    { id: 11, name: 'Multipurpose Landing Template', startDate: '30/4/2021', status: 'Pending' },
    { id: 12, name: 'Multipurpose Landing Template', startDate: '03/6/2021', status: 'Completed' },
    { id: 13, name: 'Multipurpose Landing Template', startDate: '27/8/2022', status: 'Completed' },
    { id: 14, name: 'Multipurpose Landing Template', startDate: '20/12/2022', status: 'Completed' },
    { id: 15, name: 'Multipurpose Landing Template', startDate: '15/4/2023', status: 'Pending' },
    { id: 16, name: 'Multipurpose Landing Template', startDate: '07/9/2023', status: 'Completed' },
    { id: 17, name: 'Multipurpose Landing Template', startDate: '27/10/2023', status: 'Completed' },
    { id: 18, name: 'Multipurpose Landing Template', startDate: '02/12/2023', status: 'Pending' },
    // Add more sample projects as needed
]);

  // Function to handle search
  const handleSearch = () => {
    const filtered = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.startDate.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, projects]);

  useEffect(() => {
    setTotalProjects(filteredProjects.length);
    setCompletedProjects(filteredProjects.filter((project) => project.status.toLowerCase() === 'completed').length);
    setPendingProjects(filteredProjects.filter((project) => project.status.toLowerCase() === 'pending').length);
  }, [filteredProjects]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < Math.ceil(filteredProjects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleSaveEdit = (editedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => (project.id === editedProject.id ? editedProject : project))
    );
    setEditingProject(null);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  useEffect(() => {
    // Simulating a delay of 6000 milliseconds (6 seconds)
    const delay = 6000;

    const hideLoading = () => {
      setLoading(false);
    };

    // Fade out loading page after the delay
    const fadeOutLoadingPage = setTimeout(hideLoading, delay);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(fadeOutLoadingPage);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const handleBoxClick = () => {
    // Hide the box when clicked
    setLoading(false);
  };


    return (
    
  <section className="team">

    {/* Admin Dashboard Page*/}
  <div class="container">				
  <div className="row justify-content-md-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
				<div class="section-title text-center title-ex1">
					<h2>Dashboard</h2>
					{/* <p>Below Presesnted are the Data Tables according to the Required and Selected Data.</p> */}
				</div>
			</div>
          </div>


  <div class="container mt-4">

    <div class="row">
    <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20">Total Projects</h6>
                <h2 className="text-right">
                  <span className="mx-3">{totalProjects}</span>
                  <Icon.CartFill className="h4" />
                </h2>
                <p className="m-b-0">Completed Orders<span className="f-right">{totalProjects}</span></p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Completed Projects</h6>
                <h2 className="text-right">
                  <span className="mx-3">{completedProjects}</span>
                  <Icon.RocketTakeoffFill className="h4" />
                </h2>
                <p className="m-b-0">Completed Orders<span className="f-right">{completedProjects}</span></p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h6 className="m-b-20">Pending Projects</h6>
                <h2 className="text-right">
                  <span className="mx-3">{pendingProjects}</span>
                  <Icon.ArrowRepeat className="h4" />
                </h2>
                <p className="m-b-0">Completed Orders<span className="f-right">{pendingProjects}</span></p>
              </div>
            </div>
          </div>

        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                  <div class="card-block">
                      <h6 class="m-b-20">Search</h6>
                      <input type="text" class="form-control" aria-describedby="project-search-addon" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                      <div class="input-group-append">
                      <button class="btn btn-secondary mt-1 mx-5" type="button" id="project-search-addon" onClick={handleSearch}>Search</button>
                      </div>
                  </div>
            </div>
        </div>
    </div>

    
    {/* <!-- end row --> */}

    <div class="row">
        <div class="col-lg-12 mt-5">
            <div class="card-1">
                <div class="card-body rounded box-2">
                    <div class="table-responsive project-list rounded">
                        <table class="table project-table table-centered table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Projects</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">Status</th>
                                    {/* <th scope="col">Team</th> */}
                                    {/* <th scope="col">Progress</th> */}
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {currentProjects.map((project) => (
                              <tr key={project.id}>
                                <th scope="row">{project.id}</th>
                                <td>
                                  {editingProject && editingProject.id === project.id ? (
                                   <input type="text" value={editingProject.name} onChange={(e) => setEditingProject((prevProject) => ({ ...prevProject, name: e.target.value })) } />
                                   ) : ( project.name )}
                                </td>
                                <td>
                                   {editingProject && editingProject.id === project.id ? (
                                   <input type="text" value={editingProject.startDate} onChange={(e) => setEditingProject((prevProject) => ({ ...prevProject, startDate: e.target.value })) } />
                                   ) : ( project.startDate )}
                                </td>
                                <td>
                                  <span className={`text-${project.status.toLowerCase() === 'completed' ? 'success' : 'danger'} font-12`}>
                                    <i className="mdi mdi-checkbox-blank-circle mr-1"></i> {project.status}
                                  </span>
                                </td>
                                <td>
                              <div className="action">
                                 {editingProject && editingProject.id === project.id ? (
                                <>
                                <button className="btn btn-success mr-2" onClick={() => handleSaveEdit(editingProject)}>
                                  Save
                                </button>
                                <button className="btn btn-danger" onClick={handleCancelEdit}>
                                  Cancel
                                </button>
                               </>
                              ) : (
                            <>
                             <a href="#" className="text-success mr-5" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onClick={() => handleEdit(project)} >
                                <Icon.PencilFill className="" />
                             </a>
                             <a href="#" className="text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onClick={() => handleDelete(project.id)} >
                                <Icon.Trash3Fill className="" />
                             </a>
                            </>
                           )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                    {/* <!-- end project-list --> */}

                     {/* Pagination */}
                    <div className="pt-3">
                        <ul className="pagination justify-content-end mb-0">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                             <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={(e) => prevPage(e)}>Previous</a>
                            </li>
                            {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                             <a className="page-link" href="#" onClick={(e) => paginate(index + 1, e)}>
                             {index + 1}
                            </a>
                            </li>
                        ))}
                         <li className={`page-item ${currentPage === Math.ceil(filteredProjects.length / projectsPerPage) ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={(e) => nextPage(e)}>Next</a>
                        </li>
                    </ul>
                </div>


                </div>
            </div>
        </div>
    </div>
    {/* <!-- end row --> */}
</div>


</div>


</section>
  );
}
 
export default AuthorityDashboard;