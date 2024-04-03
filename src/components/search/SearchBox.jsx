export default function SearchBox({ value, onChange }) {
    return (
      
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
    />
  );
}