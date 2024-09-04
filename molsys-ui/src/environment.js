// let baseUrl;
// const apiVersion = 'v1';

// const hostname = window && window.location && window.location.hostname;

// const cloudHosts = ['ec2-18-206-197-93.compute-1.amazonaws.com',"18.206.197.93"]
// if(cloudHosts.includes(hostname)) {
//     baseUrl = 'http://molsys.in:8080';

// } else {
//     baseUrl = "http://localhost:8080";
// }




// export const environment={
//     baseUrl
// }

let baseUrl;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

// List of cloud hostnames/IP addresses where the production API is hosted
const cloudHosts = ['ec2-18-206-197-93.compute-1.amazonaws.com', '18.206.197.93'];

// Determine baseUrl based on the current hostname
if (cloudHosts.includes(hostname)) {
    // Use the production API URL with HTTPS
    baseUrl = 'https://molsys.in/api';  // Use the load balancer domain or the appropriate URL
} else {
    // Use the local API URL for development
    baseUrl = 'https://molsys.in/api';
}

// Export the environment configuration
export const environment = {
    baseUrl
};



