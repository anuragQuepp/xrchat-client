import {
  VIDEOS_FETCHED_SUCCESS,
  VIDEOS_FETCHED_ERROR
} from '../actions'

export interface PublicVideoState {
    videos: PublicVideo[]
    error: string
}

export interface VideoMetaData {
    thumbnail_url?: string,
    '360_format'?: string
}
export interface PublicVideo {
    id: number
    name: string
    description: string
    url: string,
    metadata: Partial<VideoMetaData>
}

export interface VideosFetchedAction {
    type: string
    videos?: PublicVideo[]
    message?: string
}

export function videosFetchedSuccess(videos: PublicVideo[]): VideosFetchedAction {
  return {
    type: VIDEOS_FETCHED_SUCCESS,
    videos: videos
  }
}

export function videosFetchedError(err: string): VideosFetchedAction {
  return {
    type: VIDEOS_FETCHED_ERROR,
    message: err
  }
}
