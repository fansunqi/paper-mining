// app/page.js

"use client"; // 确保这是客户端组件
import { useSearchParams, useRouter } from "next/navigation";

export default function PaperDetail() {
  const searchParams = useSearchParams(); // 获取查询参数
  const router = useRouter(); // 用于导航

  // 从查询参数中获取 title 和 paper 数据
  const title = searchParams.get("title"); // 获取论文标题
  const paper = JSON.parse(searchParams.get("paper") || "{}"); // 解析 paper 对象

  return (
    <div className="container mx-auto px-6 py-12">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📄 {title || "未知标题"}
        </h1>
        <p className="text-gray-600 mt-4">
          {paper.authors?.join(", ") || "未知作者"}
        </p>
      </header>

      {/* 内容区域 */}
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        {/* 研究任务 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 研究任务</h2>
          <p className="text-gray-700">{paper.tasks?.join(", ") || "无任务"}</p>
        </section>

        {/* 研究方法 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠 研究方法</h2>
          <p className="text-gray-700">{paper.methods?.join(", ") || "无方法"}</p>
        </section>

        {/* 数据集 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 数据集</h2>
          <p className="text-gray-700">{paper.datasets?.join(", ") || "无数据集"}</p>
        </section>

        {/* 实验结果 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 实验结果</h2>
          <p className="text-gray-700">{paper.results?.join("; ") || "无实验结果"}</p>
        </section>

        {/* 摘要 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📜 摘要</h2>
          <p className="text-gray-700 leading-relaxed">
            {paper.abstract || "暂无摘要"}
          </p>
        </section>

        {/* 代码链接 */}
        {paper.code_links && paper.code_links.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💻 代码链接</h2>
            <div className="flex flex-wrap gap-4">
              {paper.code_links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                >
                  🔗 Link {index + 1}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 返回列表页按钮 */}
      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/")} // 返回列表页
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-200"
        >
          返回列表页
        </button>
      </div>
    </div>
  );
}
