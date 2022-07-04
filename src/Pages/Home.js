import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PageContainer from "../Components/PageContainer/PageContainer";
import data from "../Data/data.json";
import CustomCard from "../Components/CustomCard/CustomCard";

const Home = () => {
  return (
    <PageContainer>
      {data &&
        data.data?.map(value => {
          return (
            <Box key={value.type} sx={{ padding: 4, margin: 2 }}>
              <Typography variant="h3">{value.type}</Typography>
              <Grid container spacing={3} key={data.product}>
                {value.items?.map(data => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={data.product}>
                    <CustomCard
                      img={data.img}
                      imgAlt={data.product}
                      title={data.product}
                      content={data.content}
                      price={data.pirce}
                      id={data.id}
                      type={value.type}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
    </PageContainer>
  );
};

export default Home;
