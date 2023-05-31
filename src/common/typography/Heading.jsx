import localFont from "@next/font/local";

const clashDisplay = localFont({
    src : "./../../app/font/ClashDisplay-Bold.otf",
    weight : "bold",
    style : "normal"
})

export const H1 = ({classes = "", children}) => {
    return ( 
        <h1 className={`${clashDisplay.className} ` + classes}>
            {children}
        </h1>
     );
}
 

export const H2 = ({ classes = "", children }) => {
    return (
      <h2
        className={
          `font-bold text-[20px] lg:text-[24px] leading-8 lg:leading-[33px] ` +
          classes
        }
      >
        {children}
      </h2>
    );
  };
  

  
export  const H3 = ({classes = "", children}) => {
    return (  
        <h3 className={`font-bold text-[16px] md:text-[24px] ` + classes}>
            {children}
        </h3>
    );
}
