# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_binary",
    "closure_js_library",
)

closure_js_library(
    name = "app_js",
    srcs = ["index.js"],
    no_closure_library = True,
    deps = ["//third_party/preact/v10_4_7/externs"],
)

closure_js_binary(
    name = "app",
    compilation_level = "ADVANCED",
    dependency_mode = "STRICT",
    entry_points = ["third_party/preact-without-babel/index"],
    deps = [":app_js"],
)

genrule(
    name = "app_html",
    srcs = ["index.html"],
    outs = ["app.html"],
    cmd = "sed 's/index.js/app.js/' < $(location :index.html) > $(location :app.html)",
)
