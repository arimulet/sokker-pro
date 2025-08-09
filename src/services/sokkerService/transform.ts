import { ConverterFunction } from "@/types/common";
import xml2js from "xml2js";

const transformXML = async <T>(xml: string, converter?: ConverterFunction<T>): Promise<T> => {
  const parser = new xml2js.Parser({
    explicitRoot: false,
    explicitArray: false,
    mergeAttrs: true,
  });
  const result = await parser.parseStringPromise(xml);
  console.log(result);
  return converter ? converter(result) : (result as T);
};

export default transformXML;
