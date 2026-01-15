import axios from "axios";

// 1. Check window._env_ (Runtime Docker config)
// 2. Fallback to process.env (Build time config)
// 3. Default to localhost (Local dev)
const apiUrl = (window._env_ && window._env_.REACT_APP_BACKEND_URL) 
    || process.env.REACT_APP_BACKEND_URL 
    || "http://localhost:3500/api/tools";

export function getTools() {
    return axios.get(apiUrl);
}

export function addTool(tool) {
    return axios.post(apiUrl, tool);
}

export function updateTool(id, tool) {
    return axios.put(apiUrl + "/" + id, tool);
}

export function deleteTool(id) {
    return axios.delete(apiUrl + "/" + id);
}
