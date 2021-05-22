import React from 'react'
import Layout from "@/components/Layouts/index";
import Container from "@/components/Container";

const index = () => {
  return (
    <Layout type="basic">
      <Container>
        <div>dsdsds</div>
        {/*
          UI 設置 是
          圓圈 然後 border ring 可以更改,
          infinite scroll,
          inside circle: bgColor black
          然後 顯示random的icon
          下面顯示日期
          only available in mobile view
        */}
        <Story />
      </Container>
    </Layout>
  );
}

const Story = () => {
  return (
    <div className='red w-32 h-32 rounded-full relative'>
      <div>Test</div>
      <div style={{width: "60px", height: "60px", position: "absolute", left: "50%", bottom: "-10px", transform: "translateX(-50%)"}} className="blue"></div>
    </div>
  );
}

export default index
