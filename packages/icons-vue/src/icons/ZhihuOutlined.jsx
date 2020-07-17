// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ZhihuOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ZhihuOutlined';

export default {
  name: 'IconZhihuOutlined',
  displayName: 'ZhihuOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ZhihuOutlinedSvg } },
      children,
    ),
};