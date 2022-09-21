export const SideBar = ({ children, points }) => {
  return (
    <div>
      <p>This is a side bar</p>
      {children}
      <h2>{points} point</h2>
    </div>
  );
};
