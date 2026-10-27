export default function Tag({ tuiles }) {
    return (
        <div className="flex-tag">
            {tuiles?.map((tag) => (
                <p className="tag" key={tag}>
                    {tag}
                </p>
            ))}
        </div>
    );
}