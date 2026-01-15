import { Component } from "react";
import {
    addTool,
    getTools,
    updateTool,
    deleteTool,
} from "./services/toolServices";

class Manager extends Component {
    state = { tools: [], currentTool: "" };

    async componentDidMount() {
        try {
            const { data } = await getTools();
            this.setState({ tools: data });
        } catch (error) {
            console.error("Could not fetch tools:", error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTool: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTools = this.state.tools;
        try {
            const { data } = await addTool({ toolName: this.state.currentTool });
            const tools = [...originalTools, data];
            this.setState({ tools, currentTool: "" });
        } catch (error) {
            console.error("Error adding tool:", error);
        }
    };

    handleUpdate = async (toolId) => {
        const originalTools = this.state.tools;
        try {
            const tools = [...originalTools];
            const index = tools.findIndex((tool) => tool._id === toolId);
            tools[index] = { ...tools[index] };
            tools[index].mastered = !tools[index].mastered;
            this.setState({ tools });
            await updateTool(toolId, {
                mastered: tools[index].mastered,
            });
        } catch (error) {
            this.setState({ tools: originalTools });
            console.error("Error updating tool:", error);
        }
    };

    handleDelete = async (toolId) => {
        const originalTools = this.state.tools;
        try {
            const tools = originalTools.filter(
                (tool) => tool._id !== toolId
            );
            this.setState({ tools });
            await deleteTool(toolId);
        } catch (error) {
            this.setState({ tools: originalTools });
            console.error("Error deleting tool:", error);
        }
    };
}

export default Manager;
