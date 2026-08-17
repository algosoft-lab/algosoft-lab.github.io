#!/bin/bash
# 搜索引擎推送：IndexNow（Bing/Yandex 等）+ 百度（需要 token）
# 用法:
#   ./legacy/scripts/push-search-engines.sh                    # 仅 IndexNow
#   BAIDU_TOKEN=xxx ./legacy/scripts/push-search-engines.sh    # 加百度推送
set -e
cd "$(dirname "$0")/../.."

SITE="algosoft.cc"
URLS="https://algosoft.cc/"
INDEXNOW_KEY="b240ffd5e51ba7e0d8c27ff9f622a69a"

echo "[IndexNow] 推送 $URLS"
curl -s -o /dev/null -w "  api.indexnow.org: HTTP %{http_code}\n" -X POST \
  https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"$SITE\",\"key\":\"$INDEXNOW_KEY\",\"keyLocation\":\"https://$SITE/$INDEXNOW_KEY.txt\",\"urlList\":[\"$URLS\"]}"

if [ -n "$BAIDU_TOKEN" ]; then
  echo "[百度] 推送 $URLS"
  curl -s -X POST "http://data.zz.baidu.com/urls?site=https://$SITE&token=$BAIDU_TOKEN" \
    -H "Content-Type: text/plain" --data "$URLS"
  echo
else
  echo "[百度] 未设置 BAIDU_TOKEN（ziyuan.baidu.com 添加 algosoft.cc 后获取），跳过"
fi
