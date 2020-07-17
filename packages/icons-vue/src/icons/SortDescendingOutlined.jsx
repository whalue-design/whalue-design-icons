// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SortDescendingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SortDescendingOutlined';

export default {
  name: 'IconSortDescendingOutlined',
  displayName: 'SortDescendingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SortDescendingOutlinedSvg } },
      children,
    ),
};