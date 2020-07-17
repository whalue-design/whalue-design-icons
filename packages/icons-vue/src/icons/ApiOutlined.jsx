// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ApiOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ApiOutlined';

export default {
  name: 'IconApiOutlined',
  displayName: 'ApiOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ApiOutlinedSvg } },
      children,
    ),
};