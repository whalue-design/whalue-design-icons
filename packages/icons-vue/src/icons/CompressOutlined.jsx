// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CompressOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CompressOutlined';

export default {
  name: 'IconCompressOutlined',
  displayName: 'CompressOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompressOutlinedSvg } },
      children,
    ),
};