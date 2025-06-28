import kombi from '../../assets/image/hero/kombi.png'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <img src={kombi} alt="Kombi" className="w-1/2 animate-float"/>
    </div>
  );
};

export default Loader;