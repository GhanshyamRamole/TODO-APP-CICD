import axios from "axios";
// Auto-detects URL based on environment or defaults to localhost
const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3500/api/tools";

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
