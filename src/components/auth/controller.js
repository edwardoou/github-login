import axios from "axios";
import "dotenv/config";

export const callback = async (req, res) => {
  const { code } = req.query;

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.SECRET_ID,
      code,
    }
  );
  const access_token = response.data.split("=");

  return res.status(200).json({
    ok: true,
    data: access_token[1].replace("&scope", ""),
  });
};
