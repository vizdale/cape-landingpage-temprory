export const P1 = ({classes = "", children}) => {
    return ( 
      <p className={`text-[16px] lg:text-[36px] font-bold leading-5 lg:leading-[50px] ` + classes}>
          {children}
        </p>
       );
  }
  
  export const P2 = ({classes = "", children}) => {
      return ( 
      <p className={`text-[14px] lg:text-[20px] font-normal leading-5 lg:leading-[30px] ` + classes}>
          {children}
        </p>
       );
  }
   
  export const P3 = ({classes = "", children}) => {
      return ( 
      <p className={`text-[12px] lg:text-[16px] font-normal leading-4 lg:leading-[24px] ` + classes}>
          {children}
        </p>
       );
  }
  