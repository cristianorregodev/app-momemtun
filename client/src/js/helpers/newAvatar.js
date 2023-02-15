import { createAvatar } from '@dicebear/core'
import { funEmoji } from '@dicebear/collection'

export const newAvatar = (username) => {
  const avatar = createAvatar(funEmoji, {
    seed: username,
  }).toDataUriSync()
  return avatar
}
