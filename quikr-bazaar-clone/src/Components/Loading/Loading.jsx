import "./Loading.css";
export default function Loading() {
  return (
    <div className="loader_container">
      <div className="loader_inner_container">
        <div className="loader_with_img">
          <img
            src="https://i.ibb.co/QfMVW27/New-Project-21-A30-B591.png"
            alt="img"
          />
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
}
