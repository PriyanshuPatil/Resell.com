import ldg from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={ldg.loader_container}>
      <div className={ldg.loader_inner_container}>
        <div className={ldg.loader_with_img}>
          <img
            src="https://i.ibb.co/QfMVW27/New-Project-21-A30-B591.png"
            alt="img"
          />
        </div>
        <div className={ldg.loader}></div>
      </div>
    </div>
  );
}
