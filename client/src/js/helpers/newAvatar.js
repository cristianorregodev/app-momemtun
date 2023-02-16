import { createAvatar } from '@dicebear/core'
import { botttsNeutral } from '@dicebear/collection'

export const newAvatar = (username) => {
  const avatar = createAvatar(botttsNeutral, {
    seed: username,
  }).toDataUriSync()
  return avatar
}
