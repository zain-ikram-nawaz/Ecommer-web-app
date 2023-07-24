// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getdata } from "../../../services/product"

const products =getdata
export default function handler(req, res) {
  res.status(200).json(products,)
}
