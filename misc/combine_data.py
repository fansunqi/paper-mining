import os
import json

def load_data(directory):
    data_list = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.json'):  # 只处理 JSON 文件
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    try:
                        data = json.load(f)  # 加载 JSON 数据
                        data_list.append(data)  # 添加到列表
                    except json.JSONDecodeError as e:
                        print(f"解析 JSON 文件失败: {file_path}, 错误: {e}")
    return data_list

def save_combined_data(data_list, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data_list, f, ensure_ascii=False, indent=4)  # 保存为 JSON 文件

if __name__ == "__main__":
    # input_directory = "/Users/sunqifan/Documents/codes/paper-mining/outputs/meta"
    # output_file = "/Users/sunqifan/Documents/codes/paper-mining/public/meta.json"
    
    input_directory = "/Users/sunqifan/Documents/codes/paper-mining/outputs/pdf"
    output_file = "/Users/sunqifan/Documents/codes/paper-mining/public/pdf.json"

    # 加载数据
    combined_data = load_data(input_directory)
    
    print(len(combined_data))  # 输出数据长度
    
    print(combined_data[0])  # 输出第一条数据

    # 保存组合后的数据
    save_combined_data(combined_data, output_file)

    print(f"数据已成功保存到 {output_file}")