import { CreateUserDto } from '../dto/create.user.dto'
import { PutUserDto } from '../dto/put.user.dto'
import { PatchUserDto } from '../dto/patch.user.dto'
import { nanoid } from 'nanoid'
import debug from 'debug'

const log: debug.IDebugger = debug('app:in-memory-dao')