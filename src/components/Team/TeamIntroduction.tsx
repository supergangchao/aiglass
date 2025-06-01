
interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  description: string;
}
1
const TeamIntroduction = ({ members }: { members: TeamMember[] }) => (
  <section className="team-container">
  <h2 className="section-title">技术团队</h2>
  <div className="member-grid">
  {members.map((member) => (
    <div key={member.name} className="member-card">
    <div className="member-header">
    <h3>{member.name}</h3>
    <p className="role">{member.role}</p>
    </div>
    <ul className="expertise-list">
    {member.expertise.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
  <p className="description">{member.description}</p>
  </div>
))}
</div>
</section>
);

export default TeamIntroduction;