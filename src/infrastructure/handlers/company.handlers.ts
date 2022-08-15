import type { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'
import { mapCompanySearchParamsFromRawToController } from '@mappers'
import { companyControllers } from '@controllers'

const { OK } = StatusCodes

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getFilteredCompanies = async (req: NextApiRequest, res: NextApiResponse<CompanyData[]>) => {
  const { search, filters } = req.query
  const foundCompanies = await companyControllers.getFilteredCompanies(mapCompanySearchParamsFromRawToController({ search, filters }))

  return res.status(OK).json(foundCompanies)
}
