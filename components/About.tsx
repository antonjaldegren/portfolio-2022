import { Text, Grid } from '@mantine/core';
import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => (
  <SectionWrapper title="About">
    <Grid>
      <Grid.Col sm={6}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae nostrum vel
          sint ducimus quo omnis, eum sapiente ab consectetur inventore suscipit nemo quibusdam
          harum mollitia incidunt tenetur atque autem totam ad odit doloribus? Vero, quam cupiditate
          delectus sunt necessitatibus eveniet. Deleniti excepturi dignissimos labore aut, adipisci
          nesciunt nam enim obcaecati dicta cupiditate non ex ea aspernatur mollitia! Aspernatur
          illo veniam ex aut nulla, laboriosam pariatur nisi. Soluta, atque maiores voluptas
          doloremque magnam eaque odio autem dicta dolores nam aperiam tenetur asperiores saepe esse
          deleniti. Culpa modi quasi, commodi libero similique voluptatem error vel dolores sequi
          dolorum ad laborum. Eligendi.
        </Text>
      </Grid.Col>
      <Grid.Col sm={6}>Bild?</Grid.Col>
    </Grid>
  </SectionWrapper>
);

export default About;
