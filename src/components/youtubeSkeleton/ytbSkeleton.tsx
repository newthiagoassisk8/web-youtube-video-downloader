import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";


export type videoItemProps = {
  src: string;
  title: string;
  channel: string;
  views: string;
  createdAt: string;
};



interface MediaProps {
  loading?: boolean;
  videoItem?: videoItemProps;
}

function Media({ loading = false, videoItem }: MediaProps) {

  return (
    <Grid container wrap="nowrap">
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        {!loading && videoItem ? (
          <>
            <img
              style={{ width: 210, height: 118 }}
              alt={videoItem.title}
              src={videoItem.src}
            />
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {videoItem.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "text.secondary" }}
              >
                {videoItem.channel}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {`${videoItem.views} • ${videoItem.createdAt}`}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" width={210} height={118}  animation="wave"/>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton  />
              <Skeleton width="60%" />
            </Box>
          </>
        )}
      </Box>
    </Grid>
  );
}

export default function YouTube({videoItem, loading }: MediaProps) {

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media  videoItem={videoItem} loading={loading}/>
    </Box>
  );
}
