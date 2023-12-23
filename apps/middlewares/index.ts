import { useAuthorization } from './access'
import { ipBlackList } from './ip-black-list'
import { useJwtAccess } from './jwtAccess'
import { uploadMidleWare } from './upload-file'

export const middleware = { useAuthorization, ipBlackList, uploadMidleWare, useJwtAccess }
