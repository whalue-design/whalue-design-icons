// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyrightCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CopyrightCircleOutlined';

export default {
  name: 'IconCopyrightCircleOutlined',
  displayName: 'CopyrightCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyrightCircleOutlinedSvg } },
      children,
    ),
};