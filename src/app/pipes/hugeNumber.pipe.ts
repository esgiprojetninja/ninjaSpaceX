import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "hugeNumber" })
export class HugeNumberPipe implements PipeTransform {
    transform(num: number): string {
        const stringifiedNum: string = "" + num;
        if (num < 1000 && num > -1000) {
            return stringifiedNum;
        }
        const div3: number = num / 3;
        let arrayedNum: string[] = [];
        const len: number = stringifiedNum.length;
        let end: number = len;
        for (let pos = 3; pos <= len + 2; pos += 3) {
            const start: number = len - pos >= 0 ? len - pos : 0;
            const numCut = stringifiedNum.slice(start, end);
            arrayedNum = [numCut].concat(arrayedNum);
            end = start;
        }
        return arrayedNum.join(" ");
    }
}
