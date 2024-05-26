function BehaviorList({ behaviors }) {
return (
    <ul>
    {behaviors.map((behavior, index) => (
        <li key={index}>{behavior}</li>
    ))}
    </ul>
);
}

export default BehaviorList;
