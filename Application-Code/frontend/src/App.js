import React from "react";
import Manager from "./Manager"; // Extending the logic component
import { Paper, TextField, Checkbox, Button, Typography, Container } from "@material-ui/core";
import "./App.css";

// inheriting logic from Manager (formerly Tasks)
class App extends Manager {
    render() {
        const { tools, currentTool } = this.state;
        return (
            <div className="app-background">
                <Container maxWidth="md" className="main-container">
                    <header className="app-header">
                        <Typography variant="h3" component="h1" className="header-title">
                            &lt;DevOps Arsenal /&gt;
                        </Typography>
                        <Typography variant="subtitle1" className="header-subtitle">
                            Track your infrastructure mastery
                        </Typography>
                    </header>
                    
                    <Paper elevation={10} className="content-paper">
                        <form onSubmit={this.handleSubmit} className="tool-form">
                            <TextField
                                variant="outlined"
                                className="tool-input"
                                value={currentTool}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Enter new tool (e.g., Kubernetes)..."
                                fullWidth
                            />
                            <Button 
                                className="add-btn" 
                                variant="contained" 
                                type="submit"
                            >
                                EQUIP
                            </Button>
                        </form>

                        <div className="tools-list">
                            {tools.map((tool) => (
                                <Paper key={tool._id} className={`tool-item ${tool.mastered ? 'mastered-glow' : ''}`}>
                                    <Checkbox
                                        checked={tool.mastered}
                                        onClick={() => this.handleUpdate(tool._id)}
                                        className="checkbox-custom"
                                    />
                                    <div className={`tool-text ${tool.mastered ? "mastered-text" : ""}`}>
                                        {tool.toolName}
                                    </div>
                                    <Button 
                                        onClick={() => this.handleDelete(tool._id)} 
                                        className="delete-btn"
                                        size="small"
                                    >
                                        DROP
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default App;
