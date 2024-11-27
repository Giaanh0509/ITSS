// mock page for login
// cho login vào đây

import React from "react";

const Login = () => {
    return <>
        <div class="bg-gray-100">
            <div class="flex flex-col items-center justify-center min-h-screen">
                    <main-page class="flex flex-col items-center my-16 flex-1 w-full px-4">
                        <h1 class="text-6xl font-bold mb-8">
                                ログイン
                        </h1>
                        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                                <form>
                                    <div class="mb-4">
                                            <label class="block text-gray-700 mb-2" for="username">
                                                ユーザー名
                                            </label>
                                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                                id="username" placeholder="ユーザー名を入力してください" type="text" />
                                    </div>
                                    <div class="mb-4">
                                            <label class="block text-gray-700 mb-2" for="password">
                                                パスワード
                                            </label>
                                            <div class="relative">
                                                <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        id="password" placeholder="パスワードを入力してください" type="password" />
                                                <i class="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer">
                                                </i>
                                            </div>
                                            <div class="text-right mt-2">
                                                <a class="text-sm text-gray-500" href="#">
                                                        パスワードを忘れた場合
                                                </a>
                                            </div>
                                    </div>
                                    <button
                                            class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                                            ログイン
                                    </button>
                                </form>
                                <div class="text-center mt-4">
                                    <span class="text-gray-500">
                                            アカウントをお持ちでないですか？
                                    </span>
                                    <a class="text-red-600 font-bold" href="#">
                                            今すぐ登録
                                    </a>
                                </div>
                        </div>
                    </main-page>
            </div>
        </div>
    </>
}

export default Login