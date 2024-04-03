export default function SearchBox({ value, onChange }) {
    return (
      <div>
        <label htmlFor="searchInput">Find contact by name</label>
        <input
            id="searchInput"
            type="text"
            placeholder="Search contacts..."
            value={value}
            onChange={onChange}
    />
      </div>
    
  );
}