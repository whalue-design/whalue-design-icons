// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BulbOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BulbOutlined';

export default {
  name: 'IconBulbOutlined',
  displayName: 'BulbOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BulbOutlinedSvg } },
      children,
    ),
};