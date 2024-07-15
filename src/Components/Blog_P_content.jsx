import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Blog_contenct_H from "./Blog_contenct_H";

const Blog_P_content = () => {
  return (
    <section>
      <Container>
        <Flex
          className={`items-center gap-[36px] mb-9 flex-col lg:flex-row`}
        >
          <Blog_contenct_H />
          <Blog_contenct_H />
          <Blog_contenct_H />
        </Flex>
        <Flex className={`items-center gap-[36px] hidden lg:flex mb-16`}>
          <Blog_contenct_H />
          <Blog_contenct_H />
          <Blog_contenct_H />
        </Flex>
      </Container>
    </section>
  );
};

export default Blog_P_content;
