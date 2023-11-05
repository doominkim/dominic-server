import { ApiProperty } from '@nestjs/swagger';
import {
  IsCustomNumber,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'KakaoChatBotLog', schema: process.env.DB_SCHEMA_NAME })
export class KakaoChatBotLog extends CoreSoftEntity {
  @ApiProperty({
    example: 18,
    description: '우저 ID',
    required: true,
  })
  @IsCustomNumber({ required: true, minNumber: 1, maxNumber: 100 })
  @Column({ type: 'int', nullable: false })
  userId: number;

  @ApiProperty({
    required: true,
    example: '웹툰추천',
    description: '발화내용',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  utterance: string;
}
