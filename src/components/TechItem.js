const TechItem = ({ Icon, name }) => (
  <div className="tech-subj">
    <Icon className="text-xl" />
    <p className="tech-item">{name}</p>
  </div>
);

export default TechItem;
