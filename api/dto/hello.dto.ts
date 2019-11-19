import { ApiModelProperty } from "@nestjs/swagger";

export class HelloDto {
    @ApiModelProperty()
    message: string;
}