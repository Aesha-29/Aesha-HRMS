import { useState, useEffect } from "react";
import axios from "axios";
import { Network } from "lucide-react";
import "./hierarchyChart.css"; // Reuse the same tree CSS

function LevelHierarchy() {
    const [hierarchyData, setHierarchyData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHierarchy = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/hierarchy/levels");
                setHierarchyData(response.data);
            } catch (error) {
                console.error("Error fetching level hierarchy:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHierarchy();
    }, []);

    const TreeNode = ({ node }: { node: any }) => {
        return (
            <li>
                <a href="#!">
                    <div className="node-name" style={{ fontSize: '16px', color: '#1e3a8a' }}>{node.levelName}</div>
                    {node.levelCode && <div className="node-role" style={{ color: '#64748b' }}>{node.levelCode}</div>}
                    <div className="node-level" style={{ background: '#dbeafe', color: '#1e40af', marginTop: '6px' }}>
                        {node.employeeCount} Employees
                    </div>
                    {node.children && node.children.length > 0 && (
                        <div className="node-badge" title="Sub-levels" style={{ background: '#f59e0b' }}>{node.children.length}</div>
                    )}
                </a>
                {node.children && node.children.length > 0 && (
                    <ul>
                        {node.children.map((child: any) => (
                            <TreeNode key={child.id} node={child} />
                        ))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <div className="hierarchy-container">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, marginBottom: '8px' }}>
                <Network size={32} color="#3b82f6" fill="#eff6ff" /> Level Hierarchy Chart
            </h2>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>Visual representation of how different levels are connected within the organization.</p>

            <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
                {loading ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>Loading Level Chart...</div>
                ) : hierarchyData.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>No active levels found to display hierarchy.</div>
                ) : (
                    <div className="tree">
                        <ul>
                            {hierarchyData.map(rootNode => (
                                <TreeNode key={rootNode.id} node={rootNode} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LevelHierarchy;
