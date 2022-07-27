import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";
import { GRAPHQL_API_ENDPOINT } from "../../constants";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  httpProxyMiddleware(req, res, {
    target: GRAPHQL_API_ENDPOINT,
    changeOrigin: true,
  });
}
