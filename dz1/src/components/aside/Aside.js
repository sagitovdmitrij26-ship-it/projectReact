import "./Aside.css";
function Aside() {
  return (
    <aside>
    <iframe className = "Google-Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145906.76346651046!2d61.2437674609148!3d55.15189785527291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c592cb104a3a8d%3A0xef224a2a6d1711bf!2z0KfQtdC70Y_QsdC40L3RgdC6LCDQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1788758616532!5m2!1sru!2sru"
      width="600"
      height="450"
      
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
    </aside>
  );
}
export default Aside;
