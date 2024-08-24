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

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# We cannot upgrade rules_closure from 0.10 to 0.11 or later versions;
# see README.md with links for more details as to why.
http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "7d206c2383811f378a5ef03f4aacbcf5f47fd8650f6abbc3fa89f3a27dd8b176",
    strip_prefix = "rules_closure-0.10.0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")

# rules_closure 0.10.0 references zlib as follows:
# https://github.com/bazelbuild/rules_closure/blob/9ab7cb8f968ede02cbb708847a6effabcd88b1e4/closure/repositories.bzl#L1025-L1032
# which points to https://zlib.net/zlib-1.2.11.tar.gz directly, but zlib moves
# older released versions to https://zlib.net/fossils/... and leaves only recent
# versions at the top level, which breaks historical references, so we omit it
# here, and manually add another definition of the zlib rules below.
rules_closure_dependencies(omit_zlib=True)
rules_closure_toolchains()

http_archive(
    name = "zlib",
    build_file = "@com_google_protobuf//:third_party/zlib.BUILD",
    sha256 = "c3e5e9fdd5004dcb542feda5ee4f0ff0744628baf8ed2dd5d66f8ca1197cb1a1",
    strip_prefix = "zlib-1.2.11",
    urls = [
        "https://mirror.bazel.build/zlib.net/zlib-1.2.11.tar.gz",
        "https://zlib.net/fossils/zlib-1.2.11.tar.gz",
    ],
)
