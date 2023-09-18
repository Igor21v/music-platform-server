import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrackDto } from './dto/create-rack.dto';
import { Comment } from './schemas/comment.schema';
import { Track } from './schemas/track.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<Track>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }
  async getAll() {}
  async getOne() {}
  async delete() {}
}
