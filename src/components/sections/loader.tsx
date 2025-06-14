import kombi from '../../assets/image/hero/kombi.png'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]">
      <img src={kombi} alt="Kombi" className="w-1/2"/>
    </div>
  );
};

export default Loader;